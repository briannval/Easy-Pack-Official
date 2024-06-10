import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name?: String;
  email?: String;
  phone?: String;
  message?: String;
}

export const ContactEmail = ({
  name,
  email,
  phone,
  message,
}: ContactEmailProps) => {
  const previewText = `Read ${name}'s message for Easy Supply`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>
                Here's what {name} said for Easy Supply
              </Text>
              <Text style={review}>{message}</Text>
              <Text style={paragraph}>
                Now that you've read {name}'s message, you can reply to them
                using the email address {email} by clicking the button below.
              </Text>
              <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                You also have the option to call {name} at {phone}. All the best
                for PT Easy Supply!
              </Text>

              <Button style={button} href={`mailto:${email}`}>
                Reply to {name}
              </Button>
            </Row>
          </Section>

          <Section>
            <Hr style={hr} />
            <Text style={footer}>PT Easy Supply</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#B88A44",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
