import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
function MeetupDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        description={props.meetupData.description}
        address={props.meetupData.address}
      />
    </Fragment>
  );
}

// it should be called getStaticPaths()
export async function getStaticPaths() {
  // Here we are defining a static paths to be preloaded at the bigenning
  // in the future these ids should be fetching to prevent hard coding it

  const client = await MongoClient.connect(
    "mongodb+srv://MONGODB_ADMIN_EMIL:xkSbrZ_S*93Muv5@cluster0.tjey8.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  //empty object means give me all the objects -> this is the filter criteria
  // only fetch the id
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    // fallback is required to tell next if we defined all paths ids or some of them
    //  if true next will handle coming requests paths ids
    // false then anything outside the paths array will be redirected to 404
    fallback: false,
    paths: meetups.map((element) => ({
      params: { meetupId: element._id.toString() },
    })),
  };
}

// here we will see an error about static paths ? why
// because this is a dynamic page and next want to generate all meetupId before rendering the page
// we need to use getStaticPaths function in this case

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId; // meetupId because the folder named [meetupId]

  const client = await MongoClient.connect(
    "mongodb+srv://MONGODB_ADMIN_EMIL:xkSbrZ_S*93Muv5@cluster0.tjey8.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  //empty object means give me all the objects -> this is the filter criteria
  // only fetch the id
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  }); // convert it from a string to object
  client.close();
  return {
    props: {
      // we had to do this because we need to edit the id again and convert it to a string -> otherwise we could do meetupData: meetup
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
        image: meetup.image,
      },
    },
  };
}
export default MeetupDetailPage;
