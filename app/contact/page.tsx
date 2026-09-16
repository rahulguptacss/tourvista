import { getAppData } from "@/components/lib/getAppData";
import ContactInfo from "@/components/section/ContactInfo/page";
import ContactForm from "@/components/section/ContactForm/page";
import ContactMap from "@/components/section/ContactMap/page";
export default function ContactPage() {
  const fullData = getAppData();
  const contactInfoData = fullData.sections.ContactInfo.variants["variant-1"];
  const contactFormData = fullData.sections.ContactForm.variants["variant-1"];
  const contactMapData = fullData.sections.ContactMap.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col pt-0 pb-0 bg-white">
        <ContactInfo data={contactInfoData} />
        <ContactForm data={contactFormData} />
        <ContactMap data={contactMapData} />
      </div>
    </div>
  );
}
