import Button from "@src/components/Button";


export default function RootLayout() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1 className="font-bold pb-10">Shared Application</h1>
      <div className="w-48">
        <Button label="Hello!" />
      </div>
    </div>
  );
}
