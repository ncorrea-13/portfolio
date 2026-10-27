import { LinkButton } from "@/components/LinkButton";
import { T } from "@/components/T";
import common from "@/components/common.module.css";

export default function NotFound() {
  return (
    <>
      <h1 className={common.pageTitle}>404</h1>
      <p>
        <T
          es="Esta página no existe o se movió."
          en="This page doesn't exist or was moved."
        />
      </p>
      <LinkButton href="/" primary>
        <T es="Volver al inicio" en="Back home" />
      </LinkButton>
    </>
  );
}
