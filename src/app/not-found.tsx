import { Section } from "@/components/section/section";
import { NotFound } from "./components/not-found/not-found";

export default function Page() {
  return (
    <Section tinted>
      <NotFound />
    </Section>
  );
}
