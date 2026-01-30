
export type Layer = 'Business' | 'Application' | 'Technology' | 'Strategy' | 'Data';

export interface EAArtifact {
  id: string;
  name: string;
  type: string;
  layer: Layer;
  description: string;
  owner: string;
  status: 'Proposed' | 'Active' | 'Sunset' | 'Retired';
  lastUpdated: string;
  tags: string[];
}

export interface DiagramNode {
  id: string;
  label: string;
  type: string;
  x: number;
  y: number;
}

export interface DiagramLink {
  source: string;
  target: string;
  type: 'Realizes' | 'Uses' | 'Assigned To' | 'Flows To';
}

export interface AIAnalysisResult {
  summary: string;
  riskScore: number;
  recommendations: string[];
}
