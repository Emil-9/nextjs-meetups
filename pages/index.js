// import { MongoClient } from "mongodb";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";
function HomePage(props) {
  return (
    <Fragment>
      {/* good for seo -> this will show in the browser tab and index */}
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of react meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// let's say the data array is on an external db and we need to use fetch to get it
//  in Reactjs we will define a state
// create useEffect to fetch the data
// update the state value with the request response data
// then pass the array to MeetupList
// this will create a problem -> next will render the html page then the useEffect will be triggered
// that is bad for SEO
// to fix that we will use static props function
// this function is made by next and it should be named getStaticProps()
// what will happen is that next will execute the function before rendering the html page
// by that we can fetch the data with that function -> then render the page
// and we are using async to stop the browser from rendering the page before getting the async promise
// this method called ----- Static Site Generating SSG ---------

export async function getStaticProps() {
  // next will create a server side bundle for this section of the code -> it's safe also to use the credentials here
  const client = await MongoClient.connect(
    "mongodb+srv://MONGODB_ADMIN_EMIL:xkSbrZ_S*93Muv5@cluster0.tjey8.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  // it's very important to return an object here
  return {
    props: {
      meetups: meetups.map((el) => ({
        title: el.title,
        address: el.address,
        image: el.image,
        description: el.description,
        id: el._id.toString(),
      })),
    }, // the props here will be passed to the component props
    // this means that the server will update at least every 10 sec if there is coming requests
    // to prevent building the project after each chnage on the data
    revalidate: 100000, // it's not nacessary to use it
  };
}

// // the other method is ----------- Server Side Rendering SSR  -----------
// // this method means that the server will execute the function after building the site
// // runs only on the server and the name should be getServerSideProps()
// // here no need for revalidate bcz the server will rerender on the data change
// // use this method only if the data is changeing alot like every second or if we nned access to context.req or res
// export async function getServerSideProps(context) {
//   const req = context.req;  // not available for getStaticProps
//   const res = context.res;  // not available for getStaticProps
//   // fetch the data here
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export default HomePage;
