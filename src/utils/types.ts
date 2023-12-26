export namespace HeaderProps {
  export type ToggleProps = {
    visibility: boolean;
  };
  export type MainNavProps = {
    text: string;
    src: string;
    visibility: boolean;
    list?: string[] | undefined;
  };
}

export namespace MainProps {
  export type TagLinkProps = {
    text: string;
  };

  export type PickLinkProps = {
    src?: string;
    text: string;
  };

  export type SectionTitleProps = {
    text: string;
  };

  export type BestBookProps = {
    text: string;
    src?: string;
  };

  export type BestBookListProps = {
    bestBooks: string[];
  };

  export type NoticeContentProps = {
    text: string;
    date: string;
  };
}
