module.exports = {
  async create(ctx) {
    const { text } = ctx.request.body;
    // Validate and process the data as needed
    // Save the text to the database using the Strapi ORM
    const newText = await strapi.services.texts.create({ text });

    // Send a response indicating success
    return { message: 'Text created successfully', data: newText };
  },
};
