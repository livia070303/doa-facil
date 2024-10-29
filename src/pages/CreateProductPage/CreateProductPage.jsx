import React from 'react';
import CheckboxInput from "../../components/CheckboxInput"; 
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter";
import NumberInput from "../../components/NumberInput";
import SelectInput from "../../components/SelectInput";
import { UploadDocInput } from "../../components/UploadDocInput";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { postDonation } from '../../services/donationServices';
import { uploadToS3 } from '../../services/imageServices';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export function CreateProductPage(){

    const sizeOptions = ["PP", "P", "M", "G", "GG"];
    const categoryOptions = [
      'Eletrônicos',
      'Móveis',
      'Roupas Femininas',
      'Roupas Masculinas',
      'Roupas Infantis',
      'Eletrodomésticos',
      'Alimentos',
      'Sapatos',
      'Decoração',
      'Educação',
    ];

    const conditions = [
      { id: "new", label: "Novo", value: "novo" },
      { id: "used", label: "Usado", value: "usado" },
      { id: "repair", label: "Necessita de reparo", value: "precisa de reparos" },
    ];
    const navigate = useNavigate();
    const { data } = useUser();

    const handleRedirectToProduct = () => {
      navigate('/product-selection'); // Navega para a rota desejada
    };
  
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [condition, setCondition] = React.useState('');
    const [footNum, setFootNum] = React.useState(0); 
    const [tamanhos, setTamanhos] = React.useState(''); 
    const [quantity, setQuantity] = React.useState(0);
    const [error, setError] = React.useState(""); 
    const [files, setFiles] = React.useState([]);

    async function save(e){
      e.preventDefault();

      if (quantity <= 0) {
        alert("A quantidade deve ser maior que 0.");
        return;
      }

      if ((category == 'Roupas' || category == 'Roupas Femininas') && tamanhos == '') {
        alert("O tamanho não foi preenchido");
        return;
      }

      if (category == 'Sapatos' && footNum == 0) {
        alert("A numeração não foi preenchida");
        return;
      }
      let urls =[];
      const fileArray = files.map(item => item.file);
        try {
          urls = await uploadToS3(fileArray);
          console.log("Upload finalizado:", urls);
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('Não foi possível carregar as imagens corretamente, tente mais tarde...');
            return;
        }


      const model = {
        "productName": name,
        "description" : description,
        "numberShoes" : footNum,
        "tamanhos" : tamanhos,
        "category" : category,
        "condition" : condition,
        "quantity" : quantity,
        "image" : urls,
        "donor" : data?.user?._id
        
      }

      postDonation(model)
      .then(response => {
        alert(response.message);
        console.log("Doação criada com sucesso:", response);
        handleRedirectToProduct();
      })
      .catch(error => {
        alert("Erro ao cadastrar doação");
        console.error("Erro ao criar a doação:", error);
      });
    }

    return(
        <>
        <HeaderAndFooter>
        <HeaderAndFooterContainer className="flex p-12 lg:p-24 flex-col gap-4"> 
            <h1 className="font-poppins text-3xl">Cadastro de produto para doação</h1>
            <form onSubmit={save}>
            <div className="flex gap-12 flex-col border border-dashed border-pink p-6 rounded-lg">
                <div className="flex flex-col gap-12 lg:flex-row justify-between w-full">
                    <section className="flex flex-col gap-4 w-full">
                      {/* Nome do Produto */}
                      <TextField
                        fullWidth
                        id="name"
                        label="Nome do Produto*"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={true}
                      />
                      {/* Categoria */}
                      <FormControl fullWidth>
                        <InputLabel id="category-label">Categoria*</InputLabel>
                        <Select
                          labelId="category-label"
                          id="category"
                          value={category}
                          label="Categoria*"
                          onChange={(e) => setCategory(e.target.value)}
                          required={true}
                        >
                          {categoryOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </section>
                    <section className="w-full">
                        <div className="flex flex-col md:flex-row md:justify-between lg:justify-start w-full">
                          <label htmlFor="quantity" className="flex flex-col items-center md:items-start">
                            Quantidade*
                            <NumberInput 
                              id="quantity" 
                              className="p-2 justify-center rounded-md md:items-start md:justify-start "
                              value={quantity} 
                              setValue={setQuantity}
                              min={1}/>
                              {error && <span className="text-red-500 text-sm">{error}</span>}
                          </label>
                          <label htmlFor="footNum" className="flex flex-col items-center md:justify-end md:items-end lg:items-start">
                            Numeração (calçados)
                            <NumberInput
                              id="footNum"
                              className="p-2 rounded-md justify-center md:justify-end lg:justify-start"
                              value={footNum}
                              setValue={setFootNum}
                            />
                          </label>
                        </div>
                        <SelectInput id="size" className="p-2 w-full my-2" options={sizeOptions} onChange={setTamanhos}/>
                        <div className="flex flex-col w-full gap-4 my-4">
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
                                    required={true}
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2">
                    {/* Upload de Fotos */}
                    {[...Array(6)].map((_, index) => (
                      <UploadDocInput key={index} id={`image-${index}`} label={`Upload de fotos do produto ${index + 1}`} setFiles={setFiles}/>
                    ))}
                </div>
                <section className="flex flex-col gap-4 w-full">
                  {/* Descrição do Produto */}
                  <TextField
                    fullWidth
                    id="description"
                    label="Descrição do Produto"
                    multiline
                    rows={5}
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </section>
                <div className="w-full flex justify-end items-end gap-6">
                    <button type='button' onClick={handleRedirectToProduct} className="py-4 w-[150px] lg:w-[10%] bg-vermelho-médio text-white rounded-md">Cancelar</button>
                    <button type="submit" className="py-4 w-[150px] lg:w-[10%] bg-azul-claro text-white rounded-md">Salvar</button>
                </div>
            </div>
            </form>
        </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}
