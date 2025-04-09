import polygonSvg from '../assets/polygon.svg';
import groupSvg from '../assets/group.svg';
import vectorSvg from '../assets/vector.svg';
import timeSvg from '../assets/time.svg';

export const getReservationSuccessData = (date = "15 Mart") => {
  return {
    icons: {
      polygon: polygonSvg,
      checkmark: groupSvg,
      close: vectorSvg,
      time: timeSvg
    },
    date: date,
    steps: [
      { label: "Onaylandı", status: "completed" },
      { label: "Yolda", status: "pending" },
      { label: "Başladı", status: "pending" },
      { label: "Bitti", status: "pending" }
    ],
    texts: {
      title: "Tebrikler!",
      statusTitle: "Rezervasyonun Oluşturuldu",
      dateText: `${date} tarihinde onaylandı.`,
      viewDetailsButton: "Rezervasyon Detaylarına Git",
      homeButton: "Anasayfaya Dön"
    }
  };
}; 