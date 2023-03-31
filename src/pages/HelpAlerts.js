import { Helmet } from "react-helmet-async";
import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
  Divider,
  FormControl,
} from "@mui/material";
import Iconify from "../components/iconify";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../sections/@dashboard/blog";
import POSTS from "../_mock/blog";
import { useNavigate } from "react-router-dom";
import { PreviousAlertsCard } from "../sections/@dashboard/helpAlerts";
import emailjs from "@emailjs/browser";

// ----------------------------------------------------------------------

export default function HelpAlerts() {
  const navigate = useNavigate();

  const newPostbtn = () => {
    navigate("/dashboard/newpost", { replace: true });
  };

  const sendEmail = (e) => {
    console.log(e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ha2zlgf",
        "template_dca7vu4",
        e.target,
        "I885yDqg2lLy-vOr_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Help Alerts</title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h3" gutterBottom>
            Help Alerts
          </Typography>
        </Stack>

        <Typography variant="h5" gutterBottom>
          Send Help Alert
        </Typography>

        <Stack
          alignItems="center"
          justifyContent="space-between"
          mb={5}
          ml={5}
          sx={{ width: "90%" }}
        >
          <form
            onSubmit={sendEmail}
            style={{
              marginTop: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "80%", marginBottom: 1 }}
              type="text"
              name="name"
              placeholder="Name"
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "80%", marginBottom: 1 }}
              type="text"
              name="reply_to"
              placeholder="Email"
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              multiline
              rows={6}
              sx={{ width: "80%", marginBottom: 1 }}
              placeholder={"Write message here..."}
              name="message"
            />
            <br></br>
            <Button
              variant="contained"
              sx={{ width: "30%", marginBottom: 1 }}
              type="submit"
              className="submit__btn"
              style={{ marginTop: "5px", marginLeft: "25%" }}
            >
              Send
            </Button>
          </form>
        </Stack>

        {/* <Stack alignItems="center" justifyContent="space-between" mb={5} ml={5} sx={{width:'90%'}} >

          <TextField id="outlined-basic" variant="outlined" disabled value={'Send to All'}  sx={{width:'60%', marginBottom:1,}} />
          <TextField id="outlined-basic" variant="outlined" multiline rows={6} sx={{width:'60%', marginBottom:1,}} placeholder={'Write message here...'} />
          <Button variant="contained" onClick={()=>alert("Hello")} sx={{width:'30%', marginBottom:1,}}>
            Send
          </Button>
        </Stack> */}

        <Typography variant="h5" gutterBottom mb={2}>
          Previous Help Alerts
        </Typography>

        <Container sx={{ marginTop: 2 }}>
          <Divider>
            <Typography variant="subtitle1">Jan 10, 2023 10:30 AM</Typography>
          </Divider>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            optio eius explicabo harum delectus, cupiditate, autem maiores magni
            repellat minus ea sapiente reprehenderit facilis iusto
            necessitatibus velit blanditiis accusamus facere! Facere eveniet et
            natus voluptates itaque quod, optio, at labore esse molestiae vitae
            earum? Recusandae, dolor sit numquam alias nostrum quo id,
            asperiores necessitatibus dolorem corrupti quos ipsum consequatur
            unde? Odio sunt in delectus, veniam qui debitis necessitatibus. Odit
            numquam sit praesentium repellendus voluptate? Culpa, magni beatae
            dolore tenetur, voluptas eligendi, earum ullam ad et facere maiores
            eum mollitia inventore? Magnam perferendis vel sed ea nesciunt.
            Saepe repellendus at quisquam ullam reiciendis! Laudantium
            perferendis expedita quibusdam veritatis sequi quia, nihil, officia
            in blanditiis aperiam tempore animi assumenda, nemo ipsam ipsum?
          </Typography>
        </Container>

        <Container sx={{ marginTop: 2 }}>
          <Divider>
            <Typography variant="subtitle1">Jan 10, 2023 10:30 AM</Typography>
          </Divider>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            optio eius explicabo harum delectus, cupiditate, autem maiores magni
            repellat minus ea sapiente reprehenderit facilis iusto
            necessitatibus velit blanditiis accusamus facere! Facere eveniet et
            natus voluptates itaque quod, optio, at labore esse molestiae vitae
            earum? Recusandae, dolor sit numquam alias nostrum quo id,
            asperiores necessitatibus dolorem corrupti quos ipsum consequatur
            unde? Odio sunt in delectus, veniam qui debitis necessitatibus. Odit
            numquam sit praesentium repellendus voluptate? Culpa, magni beatae
            dolore tenetur, voluptas eligendi, earum ullam ad et facere maiores
            eum mollitia inventore? Magnam perferendis vel sed ea nesciunt.
            Saepe repellendus at quisquam ullam reiciendis! Laudantium
            perferendis expedita quibusdam veritatis sequi quia, nihil, officia
            in blanditiis aperiam tempore animi assumenda, nemo ipsam ipsum?
          </Typography>
        </Container>

        <Container sx={{ marginTop: 2 }}>
          <Divider>
            <Typography variant="subtitle1">Jan 10, 2023 10:30 AM</Typography>
          </Divider>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            optio eius explicabo harum delectus, cupiditate, autem maiores magni
            repellat minus ea sapiente reprehenderit facilis iusto
            necessitatibus velit blanditiis accusamus facere! Facere eveniet et
            natus voluptates itaque quod, optio, at labore esse molestiae vitae
            earum? Recusandae, dolor sit numquam alias nostrum quo id,
            asperiores necessitatibus dolorem corrupti quos ipsum consequatur
            unde? Odio sunt in delectus, veniam qui debitis necessitatibus. Odit
            numquam sit praesentium repellendus voluptate? Culpa, magni beatae
            dolore tenetur, voluptas eligendi, earum ullam ad et facere maiores
            eum mollitia inventore? Magnam perferendis vel sed ea nesciunt.
            Saepe repellendus at quisquam ullam reiciendis! Laudantium
            perferendis expedita quibusdam veritatis sequi quia, nihil, officia
            in blanditiis aperiam tempore animi assumenda, nemo ipsam ipsum?
          </Typography>
        </Container>

        {/* <Grid container >
            <Button>Check</Button>
          </Grid> */}

        {/* <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid> */}
      </Container>
    </>
  );
}
