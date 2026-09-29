import { InvitationData, TemplateId } from '@/types/invitation';
import KasavuTemplate from './KasavuTemplate';

interface TemplatePreviewProps {
  templateId: TemplateId;
  data: InvitationData;
}

export default function TemplatePreview({ templateId, data }: TemplatePreviewProps) {
  if (templateId === 'kasavu') {
    return <KasavuTemplate data={data} />;
  }
  return <KasavuTemplate data={data} />;
}
