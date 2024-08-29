const { SlashCommandBuilder, Client, CommandInteraction } = require('discord.js'); // eslint-disable-next-line no-unused-vars
const { updateQuota } = require('../../functions');

module.exports = {
  name: "add",
  description: "Add quota to a user.",
  data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('Add quota to a user.')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('The name of the user.')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('amount')
        .setDescription('The amount of quota to add.')
        .setRequired(true)),
  
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async(interaction) => {
    const name = interaction.options.getString('name');
    const amount = interaction.options.getInteger('amount');

    await interaction.deferReply({ ephemeral: true });

    const result = await updateQuota(name, amount);

    if (result.success) {
      await interaction.editReply(result.message);
    } else {
      await interaction.editReply(result.message);
    }
  }
};
