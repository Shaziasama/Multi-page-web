export default function AutumnPage() {
    return (
        <div className="season-page" style={{ padding: '20px', margin: '0 auto', maxWidth: '800px' }}>
            <h1 style={{ textAlign: 'center', color: '#32CD32', fontSize: '2.5rem', marginBottom: '20px' }}>Autumn Season</h1>
            <p style={{ textAlign: 'justify', lineHeight: '1.6', fontSize: '1rem' }}>
            Autumn, also known as fall, is a season of transformation and reflection, where nature puts on a stunning display of colors as the leaves change from vibrant greens to brilliant hues of red, orange, and gold. The air becomes crisp and refreshing, carrying the earthy scents of fallen leaves and harvest bounty. This transitional time invites cozy sweaters and hot beverages, as the days grow shorter and the nights cooler. It is a season rich with harvest festivals and Thanksgiving gatherings, where families come together to celebrate the abundance of the earth. Pumpkin patches and apple orchards become popular destinations, offering the joys of picking fresh produce and indulging in seasonal treats like pumpkin pie and cider. As wildlife prepares for winter, the sights and sounds of autumn remind us of the beauty of change and the importance of gratitude, making it a cherished time of year for many.


            </p>
            <img
                src="/autumn.jpeg"
                alt="autumn"
                className="season-image"
                style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '20px auto' }}
            />
        </div>
    );
}

