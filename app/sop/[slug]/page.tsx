import { sops } from "@/data/sops";
import { SOPViewer } from "@/components/sop-viewer";

export function generateStaticParams() {
  return sops.map((sop) => ({ slug: sop.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SOPViewer slug={slug} />;
}
