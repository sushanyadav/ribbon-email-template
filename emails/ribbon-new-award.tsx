import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const NewAwardExistingUser = () => (
  <Tailwind>
    <Html>
      <Head />
      <Body className="bg-white">
        <Section className="py-6 text-center text-xs">
          Can't see this?
          <Link href="#"> View in browser</Link>
        </Section>
        <Section className="rounded-[32px] overflow-hidden relative py-8">
          <Img
            src="https://staging.ribbon.cool/_next/image?url=%2Fimages%2FBlack.png&w=128&q=75"
            alt="Ribbon Logo"
            className="mx-auto w-[108px] h-[23.15px]"
          />

          <Section
            style={{
              transform: "rotate(124.44deg)",
              position: "absolute",
            }}
            className="bg-[#D5CDFB] blur-[190px] h-[406px] w-[406px] rounded-full top-0 right-0"
          />
          <Section
            style={{
              transform: "rotate(124.44deg)",
              position: "absolute",
            }}
            className="bg-[#D5CDFB] blur-[190px] h-[406px] w-[406px] rounded-full bottom-0 left-0"
          />
          <Container
            style={{
              boxShadow:
                "0px 12px 16px -4px rgba(27, 27, 27, 0.08), 0px 4px 6px -2px rgba(27, 27, 27, 0.03)",
            }}
            className="mx-auto pt-10 relative bg-white mt-8 text-center rounded-3xl mb-16"
          >
            <Section className="px-8">
              <Heading className="text-[32px] leading-[40px] px-10 m-0">
                <Text
                  style={{
                    background:
                      "linear-gradient(98.01deg, #7766FF 0%, #512DFF 50%, #3E22C5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  className="text-[32px] leading-[40px] m-0"
                >
                  Congrats!
                </Text>
                <Text className="text-[32px] leading-[40px] m-0">
                  You've earned an award for your achievement
                </Text>
              </Heading>
              <Button className="inline-block mx-auto mt-6 select-none cursor-pointer text-white rounded-full py-2.5 px-[18px] bg-[linear-gradient(98.01deg,_#7766FF_0%,_#512DFF_50%,_#3E22C5_100%)]">
                View award
              </Button>
              <Section className="mt-10">
                <Section
                  style={{
                    border: "1px solid #F0F0F0",
                    boxShadow:
                      "0px 12px 16px -4px rgba(27, 27, 27, 0.01), 0px 4px 6px -2px rgba(27, 27, 27, 0.01)",
                  }}
                  className="p-2 rounded-xl"
                >
                  <Row>
                    <Column className="table-cell">
                      <Img
                        className="h-[164px] w-[164px] rounded-lg"
                        src="https://s3-alpha-sig.figma.com/img/3266/e541/22eb9997fedb9f542c52b3c3ef318589?Expires=1681689600&Signature=mrSImwvbqe3G9TffwfskXrzBLz~GN9G4Cs3iG8a-BCgTIBkKGOu~PFLByW7XGkBBh6Oswp~u6l78MSrd~vsS5Xe2rd7F1XS7iMDmim-oAMqvyhWBIKVf3uNWTnu3qKn56948I7yi37J9hUhWrl7REEtQ~9CbVY3g0BtL7-IPvjAXioHy8bZvGFTKfUs4OScFViv1OsWEOcvnBUVv9ZhxELg0DHteAzwRFamvbsm369RiggiufeVivVgIJ6BAgNv~ZKk3yGBS6tF7Dh9IACJxzrSbmmfvwblEI5kT9bHjR-F-hZilSrVYdf1nc-UiWBNTKkcmnlQKk7iROxeDuLkT7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      />
                    </Column>
                    <Column align="right" className="table-cell">
                      <Section className="text-left px-8 block w-full py-[22px]">
                        <Text className="text-left text-[#191B1F] font-bold text-lg leading-6 m-0">
                          Showcase it on your profile
                        </Text>
                        <Text className="text-left mb-4 mt-2 text-[#5B5E63] text-sm">
                          Add an award module and highlight the work you’ve
                          achieved
                        </Text>
                        <Button className="select-none cursor-pointer border-solid border border-[#3E22C5] rounded-full py-1.5 px-4">
                          <Text
                            style={{
                              background:
                                "linear-gradient(98.01deg, #7766FF 0%, #512DFF 50%, #3E22C5 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                            className="m-0 font-bold"
                          >
                            Update Profile
                          </Text>
                        </Button>
                      </Section>
                    </Column>
                  </Row>
                </Section>
                <Section
                  style={{
                    border: "1px solid #F0F0F0",
                    boxShadow:
                      "0px 12px 16px -4px rgba(27, 27, 27, 0.01), 0px 4px 6px -2px rgba(27, 27, 27, 0.01)",
                  }}
                  className="p-2 rounded-xl mt-3"
                >
                  <Img
                    className="h-[164px] w-[164px] rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/a9dd/0934/d5682ea65288bcf1464727ee30cb7e8f?Expires=1681689600&Signature=BFD7axcpo8wZc5VKRI43NHCIapWtYphdCdwUgmWbPeLG9Mui9vsO-mGup3lB-K23XCdRUprfmoENi04hOcSmx9V2jSQtu89CGIBCwItyqoCEoH5OTTndjFWWzeodvCjE9c4~ie2WXicPHqPxHdJHtCwSJUxQphJ3AmwWXd8IHILpW4xiBnzGL712O~f7O8Y9CGVwpy-3Dff51yFMyOV~151h5YwKgDj1cYuQ-fsg1FsanBZpp~6aLpaEKyKyimRLt7WdTMtf7FeJylgHrN6-R1mRERPppNbdwFrB5JMQAg0Du0KvwkO5PH8pLh0RGGTx25s3RC4qW1MOvCuCSQS5AQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                  <Column className="text-left">
                    <Section className="px-8 py-[22px]">
                      <Text className="text-left text-[#191B1F] font-bold text-lg leading-6 m-0">
                        Share it with your friends
                      </Text>
                      <Text className="text-left mb-4 mt-2 text-[#5B5E63] text-sm">
                        Celebrate your accomplishments with friends and peers by
                        sharing this award.
                      </Text>
                      <Button className="select-none cursor-pointer border-solid border border-[#3E22C5] rounded-full py-1.5 px-4">
                        <Text
                          style={{
                            background:
                              "linear-gradient(98.01deg, #7766FF 0%, #512DFF 50%, #3E22C5 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                          className="m-0 font-bold"
                        >
                          Share Award
                        </Text>
                      </Button>
                    </Section>
                  </Column>
                </Section>
              </Section>
              <Section className="text-left mt-10 py-6 px-10 rounded-b-3xl bg-[#8D8D8D0D]">
                <Row>
                  <Column>
                    <Text style={{ margin: 0 }}>
                      123 Main Street, Toronto, ON L7SH83
                    </Text>
                    <Text style={{ margin: 0 }}>All Rights Reserved</Text>
                  </Column>
                  <Column className="flex gap-4 justify-end">
                    <Button>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                          fill="#512DFF"
                        />
                      </svg>
                    </Button>
                    <Button>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3564 4.85631L13.4689 6.73756C13.0939 11.1063 9.40642 14.5001 5.00017 14.5001C4.09392 14.5001 3.34392 14.3563 2.77517 14.0751C2.31892 13.8438 2.13142 13.6001 2.08142 13.5251C2.04005 13.4622 2.01339 13.3909 2.00343 13.3163C1.99347 13.2417 2.00047 13.1659 2.0239 13.0944C2.04732 13.0229 2.08658 12.9576 2.13875 12.9034C2.19091 12.8492 2.25463 12.8075 2.32517 12.7813C2.33767 12.7751 3.81267 12.2126 4.76892 11.1313C4.17588 10.7091 3.65464 10.1941 3.22517 9.60631C2.36892 8.44381 1.46267 6.42506 2.00642 3.41256C2.02351 3.323 2.06447 3.23972 2.12498 3.17151C2.18548 3.10331 2.26328 3.05271 2.35017 3.02506C2.43733 2.99652 2.53065 2.9925 2.61994 3.01345C2.70923 3.03439 2.79104 3.07949 2.85642 3.14381C2.87517 3.16881 4.95642 5.21881 7.50017 5.88131V5.50006C7.50262 5.10363 7.58314 4.71156 7.73712 4.34625C7.89109 3.98094 8.11552 3.64953 8.39758 3.37095C8.67964 3.09238 9.01381 2.87209 9.38101 2.72266C9.7482 2.57323 10.1412 2.49759 10.5377 2.50006C11.058 2.50748 11.5675 2.64955 12.0166 2.91242C12.4656 3.1753 12.839 3.55001 13.1002 4.00006H15.0002C15.0989 3.99975 15.1955 4.02867 15.2778 4.08317C15.3601 4.13767 15.4244 4.21531 15.4627 4.30631C15.4987 4.39866 15.5078 4.49933 15.489 4.59666C15.4702 4.694 15.4242 4.78402 15.3564 4.85631V4.85631Z"
                          fill="#512DFF"
                        />
                      </svg>
                    </Button>
                    <Button>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.7042 2.25C13.71 2.25 14.6775 2.6475 15.3892 3.36075C16.1017 4.0725 16.5 5.0325 16.5 6.0375V11.9625C16.5 14.055 14.7975 15.75 12.7042 15.75H5.295C3.20175 15.75 1.5 14.055 1.5 11.9625V6.0375C1.5 3.945 3.19425 2.25 5.295 2.25H12.7042ZM13.8975 7.155L13.9575 7.095C14.1368 6.8775 14.1368 6.5625 13.9493 6.345C13.845 6.23325 13.7018 6.165 13.5525 6.15C13.395 6.14175 13.245 6.195 13.1318 6.3L9.75 9C9.315 9.36075 8.69175 9.36075 8.25 9L4.875 6.3C4.64175 6.1275 4.31925 6.15 4.125 6.3525C3.9225 6.555 3.9 6.8775 4.07175 7.1025L4.17 7.2L7.5825 9.8625C8.0025 10.1925 8.51175 10.3725 9.045 10.3725C9.57675 10.3725 10.095 10.1925 10.5142 9.8625L13.8975 7.155Z"
                          fill="#512DFF"
                        />
                      </svg>
                    </Button>
                  </Column>
                </Row>
                <Section className="mt-4" align="left">
                  <Column>
                    <Text className="underline inline-block text-left m-0">
                      Manage Email Preferences
                    </Text>
                    <Text className="ml-2 underline inline-block text-left m-0">
                      Privacy Policy
                    </Text>
                  </Column>
                </Section>
              </Section>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  </Tailwind>
);

export default NewAwardExistingUser;
