import Link from "next/link"
import { turboIntegrations } from "@/data/turbo-integrations"
import { LuBook } from "react-icons/lu"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { LightDarkImage } from "@/components/light-dark-image"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageSection } from "@/components/page-section"
import { FormOpenAIPrompt } from "@/integrations/openai/components/form-openai-prompt"

export default function OpenAIPage() {
  return (
    <div className="container relative mt-20">
      <PageHeader className="pb-8">
        <LightDarkImage
          LightImage={turboIntegrations.openai.imgDark}
          DarkImage={turboIntegrations.openai.imgLight}
          alt="OpenAI Logo"
          width={100}
          height={100}
        />
        <PageHeaderHeading>OpenAI</PageHeaderHeading>
        <PageHeaderDescription>
          OpenAI offers AI models designed for advanced natural language
          processing.
        </PageHeaderDescription>
        <PageHeaderCTA>
          <Link
            href={turboIntegrations.openai.url}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LuBook className="mr-2 h-4 w-4" />
            Documentation
          </Link>
        </PageHeaderCTA>
      </PageHeader>
      <PageSection>
        <FormOpenAIPrompt />
      </PageSection>
    </div>
  )
}
