// src/components/Game.js
import Phaser from 'phaser';
import React, { useEffect } from 'react';

const Game = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image('tiles', '/assets/tilemap_packed.png');  // Asegúrate de que el nombre del archivo coincida
      this.load.tilemapTiledJSON('map', '/assets/map.json');
      this.load.spritesheet('player', '/assets/player.png', { frameWidth: 32, frameHeight: 32 });  // Asegúrate de que el nombre del archivo coincida
    }

    function create() {
      const map = this.make.tilemap({ key: 'map' });
      const tileset = map.addTilesetImage('tileset', 'tiles');
      const groundLayer = map.createLayer('Ground', tileset, 0, 0);

      this.player = this.physics.add.sprite(100, 100, 'player');
      this.physics.add.collider(this.player, groundLayer);

      this.cursors = this.input.keyboard.createCursorKeys();
    }

    function update() {
      this.player.body.setVelocity(0);

      if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-160);
      } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(160);
      }

      if (this.cursors.up.isDown) {
        this.player.body.setVelocityY(-160);
      } else if (this.cursors.down.isDown) {
        this.player.body.setVelocityY(160);
      }
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
};

export default Game;
