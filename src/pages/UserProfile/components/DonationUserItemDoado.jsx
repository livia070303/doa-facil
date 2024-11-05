import React, { useEffect, useState } from "react";
import DonationItem from "../../../components/DonationItem/DonationItem";
import { CircularProgress, Typography, Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { deleteDonationById, getItensDoadosByUser } from "../../../services/donationServices";
import { useUser } from "../../../hooks/useUser";

export default function DonationUserItemDoados() {
  const [donations, setDonations] = useState([]);
  const { data } = useUser();
  const idUser = data?.user?._id;

  useEffect(() => {
    const fetchDonationsData = async () => {
      try {
        const data = await getItensDoadosByUser(idUser);
        setDonations(data?.donations || []);
      } catch (error) {
        console.error("Erro ao buscar doações:", error);
      }
    };

    fetchDonationsData();
  }, [idUser]);

  const handleEdit = (itemId) => {
    console.log(`Editar item com ID: ${itemId}`);
  };

  const handleDelete = async (itemId) => {
    try {
      await deleteDonationById(itemId); 

      setDonations((prevDonations) => prevDonations.filter((donation) => donation._id !== itemId));
      console.log(`Doação com ID ${itemId} excluída com sucesso.`);
    } catch (error) {
      console.error("Erro ao excluir a doação:", error);
    }
  };
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {donations.length === 0 ? (
        <div className="flex flex-col items-center justify-center col-span-full">
          <CircularProgress />
          <Typography variant="h6" className="mt-2">
            Carregando...
          </Typography>
        </div>
      ) : (
        donations.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300"
          >
            {/* Detalhes do item */}
            <DonationItem
              image={item.image[0]}
              title={item.productName}
              id={item._id}
            />
            
            {/* Botões de ação */}
            <div className="mt-4 flex space-x-2">
              <Button
                variant="contained"
                color="primary"
                startIcon={<Edit />}
                className="flex-1"
                onClick={() => handleEdit(item._id)}
              >
                Editar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Delete />}
                className="flex-1"
                onClick={() => handleDelete(item._id)}
              >
                Excluir
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
