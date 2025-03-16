import { useState } from 'react';
import { 
  Container, Paper, Title, Group, Tabs, 
  Table, Badge, Text, Chip, Box 
} from '@mantine/core';

function ComparisonScreen() {
  const [activeTab, setActiveTab] = useState('details');
  const [filters] = useState(['lowSugar', 'highProtein']);
  
  // Mock data
  const products = [
    {
      id: 1,
      name: "Protein Crunch",
      isBestChoice: true,
      servingSize: "3/4 cup (55g)",
      calories: 210,
      totalFat: "3g (4% DV)",
      sodium: "140mg (6% DV)",
      totalCarbs: "38g (13% DV)",
      sugars: "5g",
      protein: "12g",
      flags: ["Low Sugar", "High Protein", "Good Fiber Source"],
      ingredients: "Whole grain wheat, soy protein isolate, chicory root fiber, almonds, cane sugar, sunflower oil, natural flavors, salt, calcium carbonate."
    },
    {
      id: 2,
      name: "Honey Loops",
      isBestChoice: false,
      servingSize: "1 cup (40g)",
      calories: 150,
      totalFat: "1.5g (2% DV)",
      sodium: "190mg (8% DV)",
      totalCarbs: "33g (11% DV)",
      sugars: "12g",
      protein: "3g",
      flags: ["High Sugar", "Low Protein", "Artificial Colors"],
      ingredients: "Corn flour, whole grain oat, sugar, honey, corn syrup, salt, caramel color, natural and artificial flavor, BHT for freshness, yellow 5, red 40, blue 1."
    }
  ];

  return (
    <Container size="sm" px="xs">
      <Group position="left" spacing="xs" mb="md">
        {filters.map(filter => (
          <Chip key={filter} checked disabled>
            {filter === 'lowSugar' ? 'Low sugar' : 
             filter === 'highProtein' ? 'High protein' : 
             filter === 'lowSodium' ? 'Low sodium' : 'Gluten free'}
          </Chip>
        ))}
      </Group>

      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="details">Details</Tabs.Tab>
          <Tabs.Tab value="comparison">Comparison</Tabs.Tab>
          <Tabs.Tab value="ingredients">Ingredients</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="details" pt="xs">
          {products.map((product) => (
            <Paper key={product.id} p="md" radius="md" shadow="sm" withBorder mb="md">
              <Group position="apart" mb="xs">
                <Title order={4}>{product.name}</Title>
                {product.isBestChoice && (
                  <Badge color="green">Best Choice</Badge>
                )}
              </Group>
              
              <Table>
                <thead>
                  <tr>
                    <th colSpan={2}>Nutrition Facts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Serving Size</td>
                    <td>{product.servingSize}</td>
                  </tr>
                  <tr>
                    <td>Calories</td>
                    <td>{product.calories}</td>
                  </tr>
                  <tr>
                    <td>Total Fat</td>
                    <td>{product.totalFat}</td>
                  </tr>
                  <tr>
                    <td>Sodium</td>
                    <td>{product.sodium}</td>
                  </tr>
                  <tr>
                    <td>Total Carbs</td>
                    <td>{product.totalCarbs}</td>
                  </tr>
                  <tr style={{ 
                    backgroundColor: product.sugars.replace('g', '') > 10 ? '#FFEBEE' : 
                                     product.sugars.replace('g', '') < 6 ? '#E8F5E9' : '#FFF9C4' 
                  }}>
                    <td>Sugars</td>
                    <td>{product.sugars}</td>
                  </tr>
                  <tr style={{ 
                    backgroundColor: product.protein.replace('g', '') > 10 ? '#E8F5E9' : 
                                     product.protein.replace('g', '') < 5 ? '#FFEBEE' : '#FFF9C4' 
                  }}>
                    <td>Protein</td>
                    <td>{product.protein}</td>
                  </tr>
                </tbody>
              </Table>
              
              <Group spacing="xs" mt="md">
                {product.flags.map((flag, i) => (
                  <Badge key={i} color={
                    flag.includes('High Sugar') || flag.includes('Low Protein') || flag.includes('Artificial') ? 'red' :
                    flag.includes('Low Sugar') || flag.includes('High Protein') || flag.includes('Good') ? 'green' : 'yellow'
                  }>
                    {flag}
                  </Badge>
                ))}
              </Group>
            </Paper>
          ))}
        </Tabs.Panel>

        <Tabs.Panel value="comparison" pt="xs">
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <Table>
              <thead>
                <tr>
                  <th>Nutrients</th>
                  <th>Protein Crunch</th>
                  <th>Honey Loops</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Serving</td>
                  <td>55g</td>
                  <td>40g</td>
                </tr>
                <tr>
                  <td>Calories</td>
                  <td>210</td>
                  <td>150</td>
                </tr>
                <tr style={{ backgroundColor: '#E8F5E9' }}>
                  <td>Sugar</td>
                  <td>5g ✓</td>
                  <td>12g</td>
                </tr>
                <tr style={{ backgroundColor: '#E8F5E9' }}>
                  <td>Protein</td>
                  <td>12g ✓</td>
                  <td>3g</td>
                </tr>
                <tr>
                  <td>Sodium</td>
                  <td>140mg ✓</td>
                  <td>190mg</td>
                </tr>
              </tbody>
            </Table>
            
            <Box mt="lg" p="md" sx={(theme) => ({
              backgroundColor: theme.colors.gray[0],
              borderRadius: theme.radius.md,
              borderLeft: `4px solid ${theme.colors.green[6]}`
            })}>
              <Title order={5} mb="xs">Recommendation</Title>
              <Text size="sm">
                Based on your preferences for low sugar and high protein,
                <strong> Protein Crunch </strong>
                is clearly the better match.
              </Text>
            </Box>
          </Paper>
        </Tabs.Panel>

        {/* Ingredients Tab */}
        <Tabs.Panel value="ingredients" pt="xs">
          {products.map((product) => (
            <Paper
              key={product.id}
              p="md"
              radius="md"
              shadow="sm"
              withBorder
              mb="md"
            >
              <Title order={5} mb="xs">
                {product.name} Ingredients
              </Title>
              <Text>{product.ingredients}</Text>
            </Paper>
          ))}
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

export default ComparisonScreen;
