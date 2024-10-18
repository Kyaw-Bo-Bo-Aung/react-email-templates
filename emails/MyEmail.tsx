import {
  Column,
  Container,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const card = {
  padding: "8px",
  borderRadius: "8px",
};

const bgWhite = {
  background: "#FFFFFF",
};

const bgCyan = {
  background: "#1677FF0F",
};

const footer = {
  maxWidth: "100%",
};

const MyEmail = () => {
  return (
    <>
      <Container style={{ fontFamily: "Lato" }}>
        {/* header section */}
        <Section style={{ marginBottom: "24px" }}>
          <Row>
            <Column align="center">
              <Link
                href="/"
                style={{
                  fontWeight: "500",
                  color: "#000",
                }}
              >
                <Img
                  src="https://ethiersandandgravel.ca/wp-content/uploads/2021/05/222-2228956_app-store-logo-app-store-icon-white.png"
                  alt="Cat"
                  width="250"
                  height="67"
                />
              </Link>
            </Column>
          </Row>
        </Section>

        {/* content */}
        <Section
          style={{
            border: "solid 1px #dedede",
            borderRadius: "24px",
            textAlign: "center",
          }}
        >
          {/* banner image */}
          <Section>
            <Img
              style={{ borderRadius: "24px 24px 0px 0px" }}
              src={`https://png.pngtree.com/png-clipart/20210829/original/pngtree-email-header-template-blue-yellow-ornament-png-image_6660071.jpg`}
              width="600"
            />
          </Section>

          {/* dynamic content */}
          <Section
            style={{
              padding: "24px 16px",
            }}
          >
            {/* Sec 1 */}
            <Section
              style={{
                padding: "12px 8px",
                background: "#1677FF0F",
                borderRadius: "8px",
              }}
            >
              <Row cellSpacing={8}>
                <Column
                  align="left"
                  style={{
                    width: "75%",
                    height: 40,
                  }}
                >
                  <Row>
                    <Column
                      style={{
                        // paddingRight: "12px",
                        width: "65px",
                      }}
                    >
                      <Img
                        src="https://img.icons8.com/m_outlined/512/40C057/ok.png"
                        alt="Cat"
                        width="55"
                        height="55"
                      />
                    </Column>
                    <Column>
                      <Text
                        style={{
                          fontSize: "24px",
                          lineHeight: "24px",
                          fontWeight: 600,
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        Dear shameer
                      </Text>
                      <Text
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "16px",
                          lineHeight: "16px",
                          fontWeight: 600,
                        }}
                      >
                        Your booking is confirmed
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column
                  align="center"
                  style={{
                    width: "25%",
                    height: 40,
                  }}
                >
                  <Section
                    style={{
                      padding: "20px",
                      background: "#FFFFFF",
                      borderRadius: "8px",
                      color: "#F50013",
                    }}
                  >
                    <Row>
                      <Column
                        style={{
                          paddingRight: "10px",
                        }}
                      >
                        <Img
                          src="https://png.pngtree.com/png-vector/20231211/ourmid/pngtree-screw-aeroplane-icon-screw-air-force-png-image_10873608.png"
                          alt="Cat"
                          width="18"
                          height="18"
                        />
                      </Column>
                      <Column>AR $$$$</Column>
                    </Row>
                  </Section>
                </Column>
              </Row>
              <Row
                cellSpacing={8}
                style={{
                  padding: "12px 16px",
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  marginTop: "16px",
                }}
              >
                <Column
                  align="left"
                  style={{
                    width: "50%",
                    height: 40,
                  }}
                >
                  <Text
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    Booking ID
                  </Text>
                  <Text
                    style={{
                      margin: "0px",
                      padding: "0px",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    ARCGB12341
                  </Text>
                </Column>
                <Column
                  align="left"
                  style={{
                    width: "50%",
                    height: 40,
                  }}
                >
                  <Text
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    Fligth No
                  </Text>
                  <Text
                    style={{
                      margin: "0px",
                      padding: "0px",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    ARCGB12341
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section
              style={{
                border: "1px solid #000000",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
            >
              <Row>
                <Column
                  align="left"
                  style={{
                    height: 40,
                  }}
                >
                  <Text
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    PNR/Booking Ref.
                  </Text>
                  <Text
                    style={{
                      margin: "0px",
                      padding: "0px",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    KUYMNT 
                  </Text>
                </Column>
                <Column
                  align="left"
                  style={{
                    height: 40,
                    borderRight: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    paddingLeft: "10px",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    Date of Booking
                  </Text>
                  <Text
                    style={{
                      margin: "0px",
                      padding: "0px",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    20 May 24 21:39:49 (UTC)
                  </Text>
                </Column>
                <Column
                  align="left"
                  style={{
                    height: 40,
                    paddingLeft: "10px",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    Payment Status
                  </Text>
                  <Text
                    style={{
                      margin: "0px",
                      padding: "0px",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Approved
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={{ ...card, ...bgCyan }}>
              <Row>
                <Column align="left">
                  <Text style={{ fontSize: "12px" }}>
                    Operated By Ethihad Airways
                  </Text>
                </Column>
                <Column
                  align="right"
                  style={{
                    background: "#FFFFFF",
                    width: "120px",
                    borderRadius: "8px",
                  }}
                >
                  <Img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="Cat"
                    width="120"
                    height="52"
                  />
                </Column>
              </Row>
            </Section>

            <Section align="Left" style={{ ...card, ...bgCyan }}>
              <Text style={{
                textAlign: "left",
                fontSize: "16px",
                fontWeight: 700
              }}>
                Mr. shameer
              </Text>
                <Section align="Left" style={{ ...card, ...bgWhite }}>
                  <Row style={{ marginBottom: "16px"}}>
                    <Column style={{ paddingRight: "8px"}}>
                    <Img
                      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                      alt="Cat"
                      width="32"
                      height="32"
                    />
                    </Column>
                    <Column align="left" style={{ width: "100%" }}>
                      Muhammed Ajeeb (23H)
                    </Column>
                  </Row>
                  <Row>
                    <Column style={{ paddingRight: "8px" }}>
                    <Img
                      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                      alt="Cat"
                      width="32"
                      height="32"
                    />
                    </Column>
                    <Column align="left" style={{ width: "100%" }}>
                    Chicken Junglee Sandwich + Beverage
                    </Column>
                  </Row>
                </Section>
                
            </Section>

          </Section>
        </Section>

        {/* footer section */}
        <Section style={{ marginTop: "24px" }}>
          <Section
            style={{
              textAlign: "center",
              marginTop: "0px",
              marginBottom: "24px",
              color: "#323B4D",
            }}
          >
            <Row>
              <Text
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  marginBottom: "24px",
                  marginTop: "0px",
                }}
              >
                Connect with us
              </Text>
            </Row>
            <Row
              style={{
                width: "55%",
                margin: "auto",
              }}
            >
              <Column align="center">
                <Link
                  href="/"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="Cat"
                    width="32"
                    height="32"
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href="/"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="Cat"
                    width="32"
                    height="32"
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href="/"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="Cat"
                    width="32"
                    height="32"
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href="/"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="Cat"
                    width="32"
                    height="32"
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href="/"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="Cat"
                    width="32"
                    height="32"
                  />
                </Link>
              </Column>
            </Row>
          </Section>
          <Section
            style={{
              textAlign: "center",
              color: "#323B4D",
            }}
          >
            <Row>
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "0",
                }}
              >
                The Airretailer App is available for iOS and Android
              </Text>
            </Row>
            <Row
              style={{
                width: "50%",
                margin: "auto",
                paddingTop: "24px",
              }}
            >
              <Column align="center">
                <Link
                  href="/"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Img
                    src="https://ethiersandandgravel.ca/wp-content/uploads/2021/05/222-2228956_app-store-logo-app-store-icon-white.png"
                    alt="Cat"
                    width="120"
                    height="40"
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href="/"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Img
                    src="https://user-images.githubusercontent.com/125717930/230804673-17c99e7d-6a21-4a64-8b9e-a465142da148.png"
                    alt="Cat"
                    width="120"
                    height="40"
                  />
                </Link>
              </Column>
            </Row>
          </Section>
          <Section
            style={{
              textAlign: "center",
              color: "#4E5D78",
              fontSize: "13px",
            }}
          >
            <Row>
              <Text
                style={{
                  lineHeight: "15.6px",
                  paddingTop: 24,
                  paddingBottom: 24,
                  margin: 0,
                }}
              >
                Copyright © 2023 AirRetailer. All Rights Reserved.
                <br />
                Air Retailer, Dubai, United Arab Emirates
              </Text>
            </Row>
            <Row>
              <Text
                style={{
                  lineHeight: "15.6px",
                  margin: 0,
                }}
              >
                You received this email because you signed up for Airretailer's
                NDC-backed
                <br />
                corporate retailing app, which offers a tailor-made, innovative,
                and value-added global inventory for
                <br />
                TMCs and corporate bookings.{" "}
              </Text>
            </Row>
          </Section>
          <Section style={{ marginTop: "24px" }}>
            <Row>
              <Column align="center">
                <Link
                  href="/"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  <Img
                    src="https://ethiersandandgravel.ca/wp-content/uploads/2021/05/222-2228956_app-store-logo-app-store-icon-white.png"
                    alt="Cat"
                    width="178"
                    height="40"
                  />
                </Link>
              </Column>
            </Row>
          </Section>
        </Section>
      </Container>
    </>
  );
};

export default MyEmail;
