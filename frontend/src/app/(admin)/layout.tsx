'use client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Wood Gear</title>
        <meta 
          title="description" content="Wood products for the home, office and person." 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
