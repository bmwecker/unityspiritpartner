import { Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

export default function SocialShareButtons({ url, title }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground font-medium">Share:</span>
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full"
        asChild
      >
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <Twitter size={16} />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full"
        asChild
      >
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Linkedin size={16} />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full"
        onClick={handleCopy}
        aria-label="Copy link"
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Link2 size={16} />}
      </Button>
    </div>
  );
}
