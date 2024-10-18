"use client";
import { HomePageTemplate } from "@/app/components/templates/HomePageTemplate/HomePageTemplate";
import { useHomePage } from "./hooks/ui/useHomePage";

export const HomePage = () => {
  const { exchangeRate, onSubmit, isLoading, additionalInfo, error } =
    useHomePage();
  return (
    <HomePageTemplate
      exchangeRate={exchangeRate}
      onSubmit={onSubmit}
      isLoading={isLoading}
      additionalInfo={additionalInfo}
      error={error}
    />
  );
};
