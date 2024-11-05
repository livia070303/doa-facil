import React, { useState } from "react";
import {
  HeaderAndFooter,
  HeaderAndFooterContainer,
} from "../../components/Layouts/HeaderAndFooter.jsx";
import DonationProducts from "../../components/DonationProducts";
import InterestProducts from "../../components/InterestProducts";
import { SectionHeader } from "../HomePage/components/SectionHeader.jsx";
import DonationUserItemDoados from "../UserProfile/components/DonationUserItemDoado.jsx";

const HistoryPage = () => {
  return (
    <HeaderAndFooterContainer>
      <HeaderAndFooter>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Minhas Doações */}
          <section className="mt-12 mb-8">
            <SectionHeader label="Histórico" title="Minhas doações" />
            <DonationUserItemDoados />
          </section>
        </div>
      </HeaderAndFooter>
    </HeaderAndFooterContainer>
  );
};

export default HistoryPage;
