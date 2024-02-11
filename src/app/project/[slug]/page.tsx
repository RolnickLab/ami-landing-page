/* eslint-disable @next/next/no-img-element */
import { ButtonLink } from "@/components/button/button";
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import classNames from "classnames";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Section tinted>
        <div className={styles.intro}>
          <h1 className="heading1">UKCEH AMI-trap</h1>
          <p className="bodyLarge">
            Combining robust lighting for attracting insects with high
            resolution cameras, the AMI-trap can provide practical and
            cost-effective solutions for standardised monitoring. AMI-traps have
            been deployed in the UK, Canada, USA, Cyprus, Panama and Argentina,
            with plans to expand further.
          </p>
          <ButtonLink
            href="mailto:ami-trap@ceh.ac.uk?subject=AMI-trap"
            label="Request a manual"
          />
        </div>
      </Section>
      <Section>
        <div className={styles.content}>
          <h2 className="heading2">How does it work?</h2>
          <p className="body">
            The AMI-trap consists of UV and white lights for attracting and
            imaging moths, high-capacity data storage to collate images over
            long sampling periods, battery and solar power to allow the system
            to be deployed away from mains power, and customisable sampling
            schedules.
          </p>
          <p className="body">
            Images collected can be processed through your own workflow, or
            using the AMI-trap Data Companion (under development by our partners
            at eButterfly), which has existing classifiers for the UK and
            Denmark, as well as Vermont and Montreal (under development by our
            partners at Mila Quebec AI Institute). This tool will find moths in
            the images collected and try to identify them to species, giving the
            species name, as well as the uncertainty of the predication.
          </p>
          <div className={styles.image}>
            <img alt="" src="/ami-trap.jpeg" />
            <Spacer size={10} />
            <span className="body">
              {`An AMI-trap at UKCEH's Wallingford, Oxfordshire site.`}
            </span>
          </div>
          <h2 className="heading2">Ongoing developments</h2>
          <p className="body">
            Work is underway to add additional features to the AMI-trap to widen
            the taxonomic groups that it can monitor. The addition of audible
            and ultrasound recording will shortly increase the taxonomic
            coverage of the trap to include birds, bats, and orthoptera.
          </p>
          <p className="body">
            In partnership with the Turing Institute we are developing edge
            processing which will enable images to be analysed on the device,
            rather than being downloaded and processed later. We also plan to
            build in pollinator monitoring alongside our monitoring of moths to
            give 24-hour monitoring of flying insects. Pollinators are known to
            be experiencing declines around the world.
          </p>
        </div>
      </Section>
      <Section tinted>
        <div className={classNames(styles.content, styles.narrow)}>
          <h1 className="heading1">Resources</h1>
          <p className="body">
            <Link href="mailto:ami-trap@ceh.ac.uk?subject=AMI-trap">
              Contact UKCEH
            </Link>{" "}
            regarding general enquiries about AMI-trap or to request a full copy
            of the AMI-trap manual.
          </p>
        </div>
      </Section>
    </>
  );
}

export function generateStaticParams() {
  return [{ slug: "example" }];
}
