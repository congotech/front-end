import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";


export default function Home() {
  return (
    <>
      <Seo title="Codeurs Monkeys" description="decription...."/>
      <div className="space-y-5">
      <Typography theme="primary" variant="display" component="div">
        Coders Monkeys Web app
      </Typography>
      <Typography theme="secondary" variant="h1" component="div">
        Coders Monkeys Web app
      </Typography>
      <Typography variant="h2" component="div">
        Coders Monkeys Web app
      </Typography>
      <Typography variant="h3" component="div">
        Coders Monkeys Web app
      </Typography>
      <Typography variant="lead" component="div">
        Coders Monkeys Web app
      </Typography>
      <Typography variant="body-sm" component="div">
        Coders Monkeys Web app
      </Typography>
      <Typography variant="caption4" component="div">
        Coders Monkeys Web app
      </Typography>
      </div>
    </>
  );
}
