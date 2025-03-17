import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";


export default function Home() {
  return (
    <>
      <Seo title="Codeurs Monkeys" description="decription...."/>
      <div className="flex items-center gap-4 p-14">
        <Button size="large" variant="outline">Outline</Button>
        <Button size="medium" variant="secondary">Secondary</Button>
        <Button size="small" variant="disabled">Disabled</Button>
        <Button>Accent</Button>
      </div>
    </>
  );
}
