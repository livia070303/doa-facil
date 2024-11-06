import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import NumberInput from "../../../components/NumberInput";
import SelectInput from "../../../components/SelectInput";
import { updateDonationById, getDonationById } from "../../../services/donationServices";
import {useParams } from "react-router-dom";

export function UpdateProductDialog({ open, onClose, item, setRefresh, refresh }) {
  const{ donationId } = useParams();
  console.log(item)
  const sizeOptions = ["PP", "P", "M", "G", "GG"];
  const categoryOptions = [
    "Eletrônicos",
    "Móveis",
    "Roupas Femininas",
    "Roupas Masculinas",
    "Roupas Infantis",
    "Eletrodomésticos",
    "Mantimentos e Cuidados",
    "Sapatos",
    "Decoração",
    "Educação",
  ];

  const conditions = [
    { id: "new", label: "Novo", value: "novo" },
    { id: "used", label: "Usado", value: "usado" },
    { id: "repair", label: "Necessita de reparo", value: "precisa de reparos" },
  ];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [footNum, setFootNum] = useState(0);
  const [tamanhos, setTamanhos] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

        if (item) {
          setName(item?.productName);
          setCategory(item?.category);
          setDescription(item?.description);
          setCondition(item?.condition);
          setFootNum(item?.numberShoes || 0);
          setTamanhos(item?.tamanhos || "");
          setQuantity(item?.quantity || 1);
        }
  }, [item]);

  const handleSave = async (e) => {
    e.preventDefault();

    if (quantity <= 0) {
      alert("A quantidade deve ser maior que 0.");
      return;
    }

    if (
      (category === "Roupas" || category === "Roupas Femininas") &&
      tamanhos === ""
    ) {
      alert("O tamanho não foi preenchido");
      return;
    }

    if (category === "Sapatos" && footNum === 0) {
      alert("A numeração não foi preenchida");
      return;
    }

    const updatedDonation = {
      productName: name,
      description: description,
      numberShoes: footNum,
      tamanhos: tamanhos,
      category: category,
      condition: condition,
      quantity: quantity
    };

    try {
      const response = await updateDonationById(item?._id, updatedDonation);
      alert(response.message);
      console.log("Doação atualizada com sucesso:", response);
      setRefresh(!refresh);
      onClose();
    } catch (error) {
      alert("Erro ao atualizar doação");
      console.error("Erro ao atualizar a doação:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Editar produto para doação</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSave}>
          <TextField
            fullWidth
            id="name"
            label="Nome do Produto*"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Categoria*</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              label="Categoria*"
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categoryOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <label htmlFor="quantity" className="contrast:font-bold">
            Quantidade*
            <NumberInput id="quantity" value={quantity} setValue={setQuantity} min={1} />
          </label>
          <label htmlFor="footNum" className="contrast:font-bold">
            Numeração
            <NumberInput id="footNum" value={footNum} setValue={setFootNum} />
          </label>
          <SelectInput
            id="size"
            options={sizeOptions}
            onChange={setTamanhos}
            value={tamanhos}
          />
          <div className="flex flex-col w-full gap-4 my-4 contrast:font-bold">
            <span>Estado de conservação*:</span>
            <div className="flex flex-col">
              {conditions.map((option) => (
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className="font-poppins flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    id={option.id}
                    name="condition"
                    value={option.value}
                    checked={condition === option.value}
                    onChange={(e) => setCondition(e.target.value)}
                    required
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          <TextField
            fullWidth
            id="description"
            label="Descrição do Produto"
            multiline
            rows={5}
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSave} type="submit" color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
