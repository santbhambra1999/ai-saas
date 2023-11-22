"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("67805554-54cc-46ae-b422-fc31692f4204");
  }, []);

  return null;
};
