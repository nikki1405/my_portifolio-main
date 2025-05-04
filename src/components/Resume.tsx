import { Button } from "@/components/ui/button";
import { DownloadIcon, FileIcon, ExternalLinkIcon } from "lucide-react";

const Resume = () => {
  const googleDocsUrl = "https://docs.google.com/document/d/1ucCm20chuyUrfllZew0umNYmWWvDueSc/edit?usp=drive_link&ouid=115257491182145476135&rtpof=true&sd=true";
  const fileId = "1ucCm20chuyUrfllZew0umNYmWWvDueSc";
  const downloadUrl = `https://docs.google.com/document/d/${fileId}/export?format=pdf`;

  return (
    <section id="resume" className="container">
      <h2 className="section-title">Resume</h2>
      
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 p-6 bg-white shadow-lg rounded-lg">
          <FileIcon className="w-12 h-12 text-primary" />
          <div className="flex gap-3">
            <Button asChild size="lg" variant="outline">
              <a 
                href={googleDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
            
            <Button asChild size="lg">
              <a 
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
