import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {t("title")}
    </div>
  );
}
