import Layout from "@/components/layout";
import SharedNotesTab from "@/components/layout/tabs/shared-notes";
import TrashedNotesTab from "@/components/layout/tabs/trashed-notes";
import type { Note } from "@/components/note/types";

import { genNotePlaceholders } from "@/components/note/mock";

interface HomePageProps {
  placeholdersShared: Note[];
  placeholdersTrashed: Note[];
}

export default function HomePage({
  placeholdersShared,
  placeholdersTrashed,
}: HomePageProps) {
  return (
    <Layout>
      <SharedNotesTab placeholders={placeholdersShared} />
      <TrashedNotesTab placeholders={placeholdersTrashed} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      placeholdersShared: genNotePlaceholders(10, "shared-notes"),
      placeholdersTrashed: genNotePlaceholders(3, "trashed-notes"),
    },
  };
}
