import Layout from "@/components/layout";
import SharedNotesTab from "@/components/layout/tabs/shared-notes";
import TrashedNotesTab from "@/components/layout/tabs/trashed-notes";
import type { Note } from "@/components/note/types";

import { genNotePlaceholders } from "@/components/note/mock";

interface HomePageProps {
  placeholders: Note[];
}

export default function HomePage({ placeholders }: HomePageProps) {
  return (
    <Layout>
      <SharedNotesTab placeholders={placeholders} />
      <TrashedNotesTab />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      placeholders: genNotePlaceholders(10),
    },
  };
}
