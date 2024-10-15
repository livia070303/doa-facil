import React from 'react'; 
import { TextField, Button, Box, Grid, InputLabel, MenuItem, FormControl, Select, TextareaAutosize } from '@mui/material';
import { UploadDocInput } from '../../components/UploadDocInput';
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter";

export function CreateNeededProductPage() { 
    const sizeOptions = ["PP", "P", "M", "G", "GG"];
    const categoryOptions = [
        "Informática", 
        "Roupas Femininas", 
        "Roupas Masculinas", 
        "Roupas Infantis", 
        "Sapatos", 
        "Decoração", 
        "Móveis", 
        "Eletrônicos", 
        "Eletrodomésticos"
    ];

    const [size, setSize] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [footNum, setFootNum] = React.useState('');
    const [category, setCategory] = React.useState('');

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <>
        <HeaderAndFooter>
            <HeaderAndFooterContainer>
                <Box sx={{ padding: 4, maxWidth: '1200px', margin: 'auto' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>Cadastro de Produto para Doação</h1>
                    <Grid container spacing={3}>
                        {/* Nome do produto */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="name"
                                label="Nome do Produto*"
                                variant="outlined"
                            />
                        </Grid>
                        {/* Categoria do produto */}
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="category-label">Categoria*</InputLabel>
                                <Select
                                    labelId="category-label"
                                    id="category"
                                    value={category}
                                    label="Categoria*"
                                    onChange={handleCategoryChange}
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        {/* Quantidade */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="quantity"
                                label="Quantidade*"
                                type="number"
                                variant="outlined"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </Grid>
                        {/* Numeração (calçados) */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="footNum"
                                label="Numeração (calçados)"
                                type="number"
                                variant="outlined"
                                value={footNum}
                                onChange={(e) => setFootNum(e.target.value)}
                            />
                        </Grid>
                        {/* Tamanho */}
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="size-label">Tamanho</InputLabel>
                                <Select
                                    labelId="size-label"
                                    id="size"
                                    value={size}
                                    label="Tamanho"
                                    onChange={handleSizeChange}
                                >
                                    {sizeOptions.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        {/* Upload de fotos */}
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {[...Array(6)].map((_, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <UploadDocInput id={`image-${index}`} label={`Upload de fotos do produto ${index + 1}`} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        {/* Descrição / Informações Adicionais */}
                        <Grid item xs={12}>
                            <TextareaAutosize
                                aria-label="Descrição do produto"
                                minRows={5}
                                placeholder="Digite a descrição do produto"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', borderColor: '#e0e0e0', fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                            />
                        </Grid>
                        {/* Botões */}
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                            <Button variant="contained" color="error" sx={{ width: 150 }}>
                                Cancelar
                            </Button>
                            <Button variant="contained" color="primary" sx={{ width: 150 }}>
                                Salvar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    );
}
