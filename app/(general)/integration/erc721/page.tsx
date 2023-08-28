"use client"

import Link from "next/link"
import { turboIntegrations } from "@/data/turbo-integrations"
import { LuBook } from "react-icons/lu"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { LightDarkImage } from "@/components/light-dark-image"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageSection } from "@/components/page-section"
import { IsWalletConnected } from "@/components/shared/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/shared/is-wallet-disconnected"
import {
  ERC721Deploy,
  Erc721Read,
  Erc721WriteApprove,
  Erc721WriteMint,
  Erc721WriteTransfer,
} from "@/integrations/erc721"
import { Erc721SetTokenStorage } from "@/integrations/erc721/components/erc721-set-token-storage"
import { useErc721TokenStorage } from "@/integrations/erc721/hooks/use-erc721-token-storage"

export default function ERC721Page() {
  const [token] = useErc721TokenStorage()

  return (
    <div className="container relative mt-20">
      <PageHeader className="pb-8">
        <LightDarkImage
          LightImage={turboIntegrations.erc721.imgDark}
          DarkImage={turboIntegrations.erc721.imgLight}
          alt="ERC721 Logo"
          width={100}
          height={100}
        />
        <PageHeaderHeading>ERC20</PageHeaderHeading>
        <PageHeaderDescription>
          ERC20 is a standard for fungible tokens on EVM chains
        </PageHeaderDescription>
        <PageHeaderCTA>
          <Link
            href={turboIntegrations.erc721.url}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LuBook className="mr-2 h-4 w-4" />
            Documentation
          </Link>
        </PageHeaderCTA>
      </PageHeader>
      <PageSection>
        <div className="container flex w-full flex-col items-center">
          <IsWalletConnected>
            <div className="flex w-full max-w-screen-lg flex-col gap-y-8">
              <ERC721Deploy />
              <Erc721SetTokenStorage />
              {token && (
                <>
                  <Erc721Read address={token} />
                  <Erc721WriteMint address={token} />
                  <Erc721WriteApprove address={token} />
                  <Erc721WriteTransfer address={token} />
                </>
              )}
            </div>
          </IsWalletConnected>
          <IsWalletDisconnected>
            <WalletConnect />
          </IsWalletDisconnected>
        </div>
      </PageSection>
    </div>
  )
}
