import React from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Paper,
} from '@mui/material';
import { UploadDocInput } from '../../components/UploadDocInput';
import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter';

export function CreateNeededProductPage() {
  const sizeOptions = ['PP', 'P', 'M', 'G', 'GG'];
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
    <HeaderAndFooter>
      <HeaderAndFooterContainer>
        <Box sx={{ padding: { xs: 2, md: 4 }, maxWidth: '900px', margin: 'auto' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Cadastro de Necessidade
          </Typography>
          <Paper elevation={3} sx={{ padding: { xs: 2, md: 4 } }}>
            <form>
              <Grid container spacing={3}>
                {/* Informações do Produto */}
                <Grid item xs={12}>
                  <Typography variant="h6">Informações do Produto</Typography>
                </Grid>
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
                {/* Descrição / Informações Adicionais */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="description"
                    label="Descrição do Produto"
                    multiline
                    rows={5}
                    variant="outlined"
                  />
                </Grid>
                {/* Upload de fotos */}
                <Grid item xs={12}>
                  <Typography variant="h6">Imagens do Produto</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {[...Array(6)].map((_, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <UploadDocInput id={`image-${index}`} label={`Imagem ${index + 1}`} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                {/* Botões */}
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Button variant="outlined" color="error" sx={{ width: 150 }}>
                    Cancelar
                  </Button>
                  <Button variant="contained" color="primary" sx={{ width: 150 }}>
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </HeaderAndFooterContainer>
    </HeaderAndFooter>
  );
}
