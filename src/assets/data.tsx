import type { ItemProps } from "../components/Item/Item";

export const data : ItemProps[] = [
  {
    title: 'Příprava prezentace',
    description: 'Vytvořit prezentaci pro páteční meeting s klientem.',
    done: false,
  },
  {
    title: 'Kontrola e-mailů',
    description: 'Projít doručenou poštu a odpovědět na důležité zprávy.',
    done: false,
  },
  {
    title: 'Plánování kampaně',
    description: 'Naplánovat marketingovou kampaň na příští měsíc.',
    done: true,
  },
  {
    title: 'Testování aplikace',
    description: 'Otestovat nové funkce a nahlásit případné chyby.',
    done: false,
  }
];
