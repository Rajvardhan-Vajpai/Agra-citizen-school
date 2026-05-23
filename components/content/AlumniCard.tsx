export function AlumniCard({ profile }: any) {
  return <div>{profile?.name || 'Alumni'}</div>;
}
