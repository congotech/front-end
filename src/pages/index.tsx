import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { RiUser6Line } from "react-icons/ri";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";



export default function Home() {
  return (
    <>
      <Seo title="Codeurs Monkeys" description="decription...."/>
      <div className="flex items-center gap-4 p-14">
        <Spinner size="small" variant="primary"/>
        <Spinner />
        <Spinner size="large" variant="primary"/>
        <Button icon={{icon:RiUser6Line}} iconPosition="left">Accent</Button>
        <Button size="large" variant="outline">Outline</Button>
        <Button size="medium" variant="secondary">Secondary</Button>
        <Button size="small" variant="disabled">Disabled</Button>
        <Button>Default</Button>
        <Button size="small" variant="ico" icon={{icon:RiUser6Line}}/>
      </div>
      <div className="flex items-center gap-4 p-14">
        <Spinner size="small" variant="primary"/>
        <Spinner />
        <Spinner size="large" variant="primary"/>
        <Button isLoading icon={{icon:RiUser6Line}} iconPosition="left">Accent</Button>
        <Button isLoading size="large" variant="outline">Outline</Button>
        <Button isLoading size="medium" variant="secondary">Secondary</Button>
        <Button isLoading size="small" variant="disabled">Disabled</Button>
        <Button isLoading>Default</Button>
        <Button isLoading size="small" variant="ico" icon={{icon:RiUser6Line}}/>
      </div>
      <div className="flex items-center gap-4 p-14">
        <Button variant="outline">Outline</Button>
        <Button  variant="secondary">Secondary</Button>
        <Button variant="disabled">Disabled</Button>
        <Button>Default</Button>
        <Button size="medium" variant="ico" icon={{icon:RiUser6Line}}/>
      </div>
      <div className="flex items-center gap-4 p-14">
        <Button size="large" variant="outline">Outline</Button>
        <Button size="medium" variant="secondary">Secondary</Button>
        <Button size="small" variant="disabled">Disabled</Button>
        <Button>Default</Button>
        <Button 
          size="small" 
          variant="ico" 
          icon={{icon:RiUser6Line}}
          iconTheme="secondary"
        />
        <Button 
          size="medium" 
          variant="ico" 
          icon={{icon:RiUser6Line}}
          iconTheme="gray"
        />
        <Button 
          size="large" 
          variant="ico" 
          icon={{icon:RiUser6Line}}
        />
      </div>
    </>
  );
}
