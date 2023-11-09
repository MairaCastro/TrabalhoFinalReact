import React, { useState, useRef, useEffect } from "react";

export default function FormattedNumber( number ) {
    const formattedNumber = number?.toLocaleString('pt-BR', { //usando ?. para chamar toLocaleString() apenas se number não for undefined ou null. Se number for undefined ou null, formattedNumber será undefined
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return formattedNumber
  }