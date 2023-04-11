import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from 'next/head'

function NewMeetUpPage() {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }); // the backend api we wrote on nextjs

    if (!response.ok) {
      throw new Error({ message: "error submitting data " }, { status: 500 });
    }
    const data = await response.json();
    console.log("data", data);
    router.push("/"); // we can use router.replace to insure not to go back to the form page
  };

  return (
    <Fragment>
      <Head>
        <title>Add Meetup</title>
        <meta name="description" content="add a new meetup to the website" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetUpPage;
