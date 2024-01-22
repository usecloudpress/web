"use client";

import HeroSection from "../../components/hero-section";
import ImageComparison from "../../components/image-comparison";
import compare1 from "../../public/images/terracotta-army-google-docs.png";
import compare2 from "../../public/images/terracotta-army-travel-diaries.png";
import { Button, LinkButton } from "../../components/buttons";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import ModalVideo from "react-modal-video";
import React, { useState } from "react";
import "/modal-video.css";

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <HeroSection
        heading="Export content from Google Docs and Notion to your CMS"
        supportingText="Automate the export of perfectly formatted content, so you have more time for doing work that matters"
        heroImage={
          <>
            <ImageComparison
              image1={compare1}
              image1Label="Google Docs"
              image2={compare2}
              image2Label="Website"
            />
          </>
        }
        heroActionButtons={
          <>
            <Button
              onClick={() => setVideoOpen(true)}
              variant="default"
              size="xl"
            >
              <div className="flex gap-x-2">
                <PlayCircleIcon className="w-6 h-6" />
                Watch a demo
              </div>
            </Button>
            <LinkButton
              href="https://app.usecloudpress.com/register"
              variant="primary"
              size="xl"
            >
              Start your free trial
            </LinkButton>
          </>
        }
      />
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId="IWtqIA30rbw"
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
