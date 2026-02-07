import OurTeam from "../../components/OurTeam/OurTeam";

export default function OurEventsPage() {
  return (
    <>
      <OurTeam
        title="Founder"
        name="Sr. Maria Goretti SRA"
        description="Sr. Maria Goretti SRA is the Director of the St. Ignatius Institutions..."
        image="/founder.png"
      />

      <OurTeam
        title="President"
        name="Sr. Juliet Lobo SRA"
        description="Dharma Jyothi Social Centre is the branch of Dharma Jyothi Charitable Society..."
        image="/founder.png"
        reverse
      />

      <OurTeam
        title="Co-Ordinator"
        name="Sr. Joel Lasrado SRA"
        description="Sr. Joel Lasrado SRA is the Co-ordinator of Dharma Jyothi Social Centre..."
        image="/founder.png"
      />
    </>
  );
}
