import React, { useEffect, useState } from "react";
import DonationItem from "../../../components/DonationItem/DonationItem";
import { CircularProgress, Typography } from "@mui/material";
import {
  getFavoritesByUser,
  getItensDoadosByUser,
} from "../../../services/donationServices";
import { useUser } from "../../../hooks/useUser";

export default function DonationUserItemRecebidos({ item }) {
  const [donations, setDonations] = useState([]);
  const { data } = useUser();
  const idUser = data?.user?._id;

  useEffect(() => {
    const fetchDonationsData = async () => {
      try {
        let data;
        //data = await searchDonations(search);
        // setDonations(data?.favorite || []);
      } catch (error) {
        console.error("Erro ao buscar doações:", error);
      }
    };

    fetchDonationsData();
  }, []);

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
          <DonationItem
            key={index}
            image={item.donationId?.image[0]}
            title={item.donationId?.productName}
            id={item.donationId?._id}
          />
        ))
      )}
    </div>
  );
}
