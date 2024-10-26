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

    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [description, setDescription] = React.useState('');

    return(
        <>
        <HeaderAndFooter>
        <HeaderAndFooterContainer className="flex p-12 lg:p-24 flex-col gap-4"> 
            <h1 className="font-poppins text-3xl">Cadastro de produto para doação</h1>
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
                            <NumberInput id="quantity" className="p-2 justify-center rounded-md md:items-start md:justify-start "/>
                          </label>
                          <label htmlFor="footNum" className="flex flex-col items-center md:justify-end md:items-end lg:items-start">
                            Numeração (calçados)
                            <NumberInput id="footNum" className="p-2 rounded-md justify-center md:justify-end lg:justify-start"/>
                          </label>
                        </div>
                        <SelectInput id="size" className="p-2 w-full my-2" options={sizeOptions}/>
                        <div className="flex flex-col w-full gap-4 my-4">
                            <span>Estado de conservação*:</span>
                            <div className="flex flex-col">
                              <label htmlFor="new" className="font-poppins flex items-center space-x-2">
                                  <CheckboxInput label="Novo" id="new" />
                              </label>
                              <label htmlFor="used" className="font-poppins flex items-center space-x-2">
                                  <CheckboxInput label="Usado" id="used" />
                              </label>
                              <label htmlFor="repair" className="font-poppins flex items-center space-x-2">
                                  <CheckboxInput label="Necessita de reparo" id="repair" />
                              </label>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2">
                    {/* Upload de Fotos */}
                    {[...Array(6)].map((_, index) => (
                      <UploadDocInput key={index} id={`image-${index}`} label={`Upload de fotos do produto ${index + 1}`} />
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
                    <button className="py-4 w-[150px] lg:w-[10%] bg-vermelho-médio text-white rounded-md">Cancelar</button>
                    <button className="py-4 w-[150px] lg:w-[10%] bg-azul-claro text-white rounded-md">Salvar</button>
                </div>
            </div>
        </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}
