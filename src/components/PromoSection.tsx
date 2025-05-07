
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PromoCardProps {
  title: string;
  description: string;
  price?: string;
  originalPrice?: string;
  saving?: string;
  code?: string;
  expiration?: string;
}

const PromoCard = ({ title, description, price, originalPrice, saving, code, expiration }: PromoCardProps) => {
  return (
    <Card className="overflow-hidden border-2 border-hvac-blue h-full flex flex-col">
      <div className="bg-hvac-blue text-white py-2 px-4 text-center">
        <p className="font-semibold">Limited Time Offer</p>
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-hvac-navy mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {price && (
          <div className="mb-4">
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-hvac-navy">{price}</span>
              {originalPrice && (
                <span className="ml-2 text-gray-500 line-through text-sm">{originalPrice}</span>
              )}
            </div>
            {saving && <p className="text-green-600 text-center text-sm">Save {saving}</p>}
          </div>
        )}
        
        {code && (
          <div className="bg-gray-100 p-2 rounded-md text-center mb-4">
            <p className="text-sm text-gray-600">Use Code:</p>
            <p className="font-bold text-hvac-navy">{code}</p>
          </div>
        )}
        
        {expiration && (
          <p className="text-sm text-gray-500 text-center">Expires: {expiration}</p>
        )}
      </CardContent>
      <CardFooter className="pt-0 pb-6 px-6">
        <Button className="w-full bg-hvac-blue hover:bg-blue-700">Claim Offer</Button>
      </CardFooter>
    </Card>
  );
};

const PromoSection = () => {
  return (
    <section className="py-16 bg-hvac-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hvac-navy mb-4">Special Offers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take advantage of these limited-time promotions to save on your HVAC services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PromoCard 
            title="Spring AC Tune-Up"
            description="Ensure your air conditioner is ready for summer with our comprehensive maintenance service."
            price="$89.99"
            originalPrice="$129.99"
            saving="$40"
            code="SPRING24"
            expiration="May 31, 2024"
          />
          
          <PromoCard 
            title="New System Installation"
            description="Upgrade to a high-efficiency heating and cooling system and save on installation."
            saving="Up to $1,500"
            code="UPGRADE24"
            expiration="June 30, 2024"
          />
          
          <PromoCard 
            title="Service Plan Special"
            description="Sign up for our annual maintenance plan and receive priority scheduling and 15% off all repairs."
            price="$249/year"
            originalPrice="$299/year"
            code="ANNUAL24"
            expiration="Limited time offer"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
