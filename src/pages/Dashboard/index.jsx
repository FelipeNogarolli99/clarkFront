import React, { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiMessageSquare, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dashboard.css";

export default function Consultorio() {

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Dashboard">
          <FiMessageSquare size={25} />
        </Title>
      </div>
    </div>
  );
}
