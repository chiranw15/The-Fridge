import Head from "next/head";
import ListItems from "../containers/ListItems";
import NewItemForm from "../containers/NewItemForm";
import ContentBlock from "../elements/ContentBlock";
import TaskDescription from "../containers/TaskDescription";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Fridge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">The Fridge</h1>
        <ContentBlock>
          <h2>😋 Add something to fridge</h2>
          <NewItemForm />
        </ContentBlock>
        <ContentBlock>
          <h2>🍤 Items in fridge</h2>
          <ListItems />
        </ContentBlock>
        <hr />
        <ContentBlock>
          <h2>🤔 The task</h2>
          <TaskDescription />
        </ContentBlock>
      </main>
    </div>
  );
}
