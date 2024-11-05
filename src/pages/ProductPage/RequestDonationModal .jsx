import React, { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useChat } from "../../hooks/useChat";
import { useNavigate } from "react-router-dom";

const RequestDonationModal = ({productId,productName,idUserLogado,idUserDonor,open,onClose
}) => {
  const [additionalMessage, setAdditionalMessage] = useState(
    `Olá! Gostaria de solicitar a doação do produto (${productName}) que você anunciou. Ele será de grande ajuda para mim, e ficaria muito grato(a) se pudesse me ajudar. Caso precise de mais informações sobre como posso recebê-lo ou qualquer outro detalhe, estou à disposição. Agradeço pela consideração e pela generosidade em compartilhar!`
  );

  const {handleSendMessage, setMessages, refetch} = useChat();

  const navigate = useNavigate();

  const handleSendMessageSend = async () => {
    const data = {
      user1: idUserLogado,
      user2: idUserDonor,
      message: additionalMessage,
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        userSend: idUserLogado ,
        ConteudoMessage: additionalMessage,
        Timespam: new Date().toISOString(),
      },
    ]);
    await handleSendMessage(data);
    await refetch();
    navigate('/chat');
  };

  return (
       <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="solicitar-doacao-dialog"
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '12px',
          padding: '20px',
        },
      }}
    >
      <DialogTitle id="solicitar-doacao-dialog" sx={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
        Solicitar Doação
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2, textAlign: 'center' }}>
          Escreva uma mensagem adicional para o doador:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="additionalMessage"
          label="Mensagem adicional (opcional)"
          type="text"
          fullWidth
          variant="outlined"
          value={additionalMessage}
          onChange={(e) => setAdditionalMessage(e.target.value)}
          multiline
          rows={4} // Ajusta altura para mensagens mais longas
          sx={{ mt: 1 }}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', gap: 2 }}>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSendMessageSend} variant="contained" color="primary">
          Enviar Solicitação
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestDonationModal;
