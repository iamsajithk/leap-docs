import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { externalLinks } from "../utils/external-links";
import { internalLinks } from "../utils/internal-links";
import { SiTypescript } from "react-icons/si";
import { HiOutlineKey } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

export function SelectionCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  // Add state variable for hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <div
        style={{
          backgroundColor: resolvedTheme !== "light" ? "#52BAFF1A" : "#E0EFFF",
          border: isHovered ? "1px solid" : "none",
          borderColor: resolvedTheme !== "light" ? "#52BAFF" : "#52BAFF77",
          padding: "25px",
          paddingTop: "20px",
          paddingBottom: "20px",
          borderRadius: "10px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "8px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: resolvedTheme !== "light" ? "#52BAFF" : "#52BAFF77",
            marginBottom: "8px",
            // justifyContent: "center",
          }}
        >
          {icon}
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h3>
        <p style={{ fontSize: "15px" }}>{description}</p>
      </div>
    </Link>
  );
}

export function QuickStartCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        justifyContent: "flex-start",
        gap: "15px",
        marginTop: "30px",
        maxWidth: "750px",
      }}
    >
      <SelectionCard
        title="Get API key"
        description="Experience seamless integration with our API by getting your API key."
        href={internalLinks.authentication}
        icon={<HiOutlineKey size={26} />}
      />
      <SelectionCard
        title="Develop with API"
        description="Call our HTTP endpoints directly from any language, including Python, Javascript, and more."
        href={externalLinks.apiReference}
        icon={<FaCode size={26} />}
      />
      <SelectionCard
        title="Develop with Typescript SDK"
        description="Get started with our Javascript/Typescript SDKs."
        href={internalLinks.typeScriptSdk}
        icon={<SiTypescript size={26} />}
      />

      <SelectionCard
        title="Upgrade subscription"
        description="Unlock more images and features by upgrading your subscription."
        href={externalLinks.pricing}
        icon={<MdWorkspacePremium size={26} />}
      />
    </div>
  );
}