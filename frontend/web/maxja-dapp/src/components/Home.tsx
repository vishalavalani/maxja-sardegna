import { Card, CardHeader, CardMedia, Grid, CardActions, CardContent, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import bigBuyCrypto from "../assets/bigBuyCrypto.png";
import bigMintNFT from "../assets/bigMintNFT.png";
import bigViewNFTs from "../assets/bigViewNFTs.png";
import "../scss/Home.scss";

const Home = () => {

  const navigate = useNavigate();

  type cardProps = {
    title: string,
    image: string,
    description: string,
    background: string,
    buttonText: string,
    to: "/buy-crypto" | "/mint-nft" | "/view-nfts",
  }

    const cards: cardProps[] = [
        {
            title: "BUY CRYPTO",
            image: bigBuyCrypto,
            background: "#741918",
            description: "Get some Funds! Purchase $100 USDC to MINT your NFT. Remember to have at least 1 MATIC for gas fees!",
            buttonText: "BUY CRYPTO",
            to: "/buy-crypto"
        },
        {
          title: "MINT NFT",
          image: bigMintNFT,
          description: "This NFT is your Ticket to Maxja 2022 also gives you access to a % of discount for accommodation at the Venue!",
          background: "",
          buttonText: "MINT NFT",
          to: "/mint-nft"
        },
        {
          title: "VIEW NFTs",
          image: bigViewNFTs,
          description: "“The Deer” Deer have sharp hearing, vision, and sense of smell. They can see approximately 360 degrees. Because of their potent sensitivity, deer symbolize instincts and intuition.",
          background: "",
          buttonText: "VIEW NFTs",
          to: "/view-nfts"
        }
    ]

    const navigateTo = (to: "/buy-crypto" | "/mint-nft" | "/view-nfts") => {
      if (to === "/buy-crypto") {
        navigate("/buy-crypto", {replace: true});
      } else if (to === "/mint-nft") {
        navigate("/mint-nft", {replace: true});
      } else {
        navigate('/view-nfts', {replace: true});
      }

    }
    //TODO: add media query @1335px width to REMOVE alignContent center 
    return (
        <Grid container className="container-media-query" justifyContent="center" sx={{gap: "5em", height: "100%", width: "100%", overflowY: "scroll", padding: "10px"}}>

        {cards.map((card: cardProps) => (
      <Card
      key={card.title}
      sx={{
        display: "grid",
        justifyItems: "center",
        height: "600px",
        width: "385px",
        borderRadius: "60px !important",
        boxShadow: "0px 0px 6px 10px #00000005",
      }}
    >
      <Grid display="flex" alignContent="center">
        <CardHeader
          title={card.title}
          titleTypographyProps={{ align: "right" }}
          subheaderTypographyProps={{
            color: "#C5716B",
            align: "center",
            marginLeft: "auto",
          }}
          sx={{ }}
        />
      </Grid>
      <Grid container spacing={2} sx={{height: "200px", width: "200px"}}>
            <CardMedia component="img" image={card.image} height="200px" width="200px" sx={{ background: card.background, borderRadius: "50%"}}></CardMedia>
          </Grid>
      <CardContent sx={{display: "flex", justifyContent: "center"}}>
          <Typography style={{textAlign: "center"}}>{card.description}</Typography>

      </CardContent>
      <CardActions>
        <Button
        type="submit"
          variant="contained"
          sx={{
            background: "#F69043",
            "&:hover": {
              background: "#f7984f",
            },
            height: "60px",
            width: "160px",
            borderRadius: "5em",
          }}
          onClick={() => navigateTo(card.to)}
        >
          {card.buttonText}
        </Button>
      </CardActions>
    </Card>
    ))}

        </Grid>
    )

}

export default Home;